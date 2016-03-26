require 'Oga'
require 'open-uri'
require 'pry'

uri = "https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%8D%81%E5%85%AB%E6%89%8B"
body = open(uri)

document = Oga.parse_html(body)

dts = document.xpath('//dt')
kimarite = dts.map {|dt| dt.children.text }

File.open('./kimarite.data', 'w') do |f|
  kimarite.each do |te|
    f.puts(te)
  end
end