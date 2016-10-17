require 'Oga'
require 'open-uri'
require 'json'
require_relative 'rental_shop_rss'

class RentalShopVisit
  attr_reader :content_url_list, :output_data

  def initialize
    @content_url_list = RentalShopRss.new.all_url
    @output_data = {}
  end

  def part(url)
    body = open(url).read
    doc = Oga.parse_html(body)
    title = doc.xpath('//item/title').map { |m| m.children.text}
    description = doc.xpath('//item/description').map { |m| m.children.text}
    ary = [title, description].transpose
    contents = Hash[*ary.flatten]
    contents.each do |key, value|
      @output_data[key] = value
    end
  end

  def all
    content_url_list.each do |url|
      part(url)
    end
  end

  def output_data
    pattern = /\d{4}年\d{1,2}月\d{1,2}日/
    @output_data.each do |title, value|
      rental_start_date = value.match(pattern)[0]
      print "#{rental_start_date}:#{title}"
      sleep(0.5)
    end
  end
end

STDOUT.sync = true
visit = RentalShopVisit.new
visit.all
visit.output_data