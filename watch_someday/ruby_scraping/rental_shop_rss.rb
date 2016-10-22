class RentalShopRss
  attr_reader :movie_url, :action_movie_url, :sf_movie_url,
              :drama_movie_url, :action_movie_url_ja, :drama_movie_url_ja,
              :all_url
  def initialize
    @movie_url = 'http://feeds.feedburner.com/relecale-morental'
    @action_movie_url = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=25&u=0_011|1_25|5_002|6_0000&ic=002&it=0000&i=011'
    @sf_movie_url = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=33&u=0_011|1_33|5_002|6_0000&ic=002&it=0000&i=011'
    @drama_movie_url = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=28&u=0_011|1_28|5_002|6_0000&ic=002&it=0000&i=011'
    @action_movie_url_ja = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=35&u=0_011|1_35|5_002|6_0000&ic=002&it=0000&i=011'
    @drama_movie_url_ja = 'http://www.tsutaya.co.jp/dynamic_rss.php?rssId=80&s=1&lj=38&u=0_011|1_38|5_002|6_0000&ic=002&it=0000&i=011'
    get_url_list
  end

  private
  def get_url_list
    @all_url = [@movie_url, @action_movie_url, @sf_movie_url,
                @drama_movie_url, @action_movie_url_ja, @drama_movie_url_ja]
  end
end