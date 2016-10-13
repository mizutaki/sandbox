require 'Oga'
require 'open-uri'
require 'json'

STDOUT.sync = true

movie = 'http://feeds.feedburner.com/relecale-morental'
action_movie = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=25&u=0_011|1_25|5_002|6_0000&ic=002&it=0000&i=011'
sf_movie = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=33&u=0_011|1_33|5_002|6_0000&ic=002&it=0000&i=011'
drama_movie = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=28&u=0_011|1_28|5_002|6_0000&ic=002&it=0000&i=011'

action_movie_ja = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=35&u=0_011|1_35|5_002|6_0000&ic=002&it=0000&i=011'
drama_movie_ja = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=38&u=0_011|1_38|5_002|6_0000&ic=002&it=0000&i=011'

content_url = [movie, action_movie, sf_movie, action_movie_ja, drama_movie_ja]
content_url.each do |url|
  body = open(url).read
  doc = Oga.parse_html(body)
  title = doc.xpath('//item/title').map { |m| m.children.text}
  description = doc.xpath('//item/description').map { |m| m.children.text}
  ary = [title, description].transpose
  contents = Hash[*ary.flatten]
  pattern = /\d{4}年\d{1,2}月\d{1,2}日/
  contents.each do |title, value|
    rental_start_date = value.match(pattern)[0]
    print "#{rental_start_date}:#{title}"
    sleep(0.5)
  end
end
