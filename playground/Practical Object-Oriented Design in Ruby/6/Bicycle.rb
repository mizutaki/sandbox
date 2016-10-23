class Bicycle
  attr_reader :style, :size, :tap_color,
              :front_shock, :rear_shock

  def initialize(args)
    @style = args[:style]
    @size = args[:size]
    @tap_color = args[:tap_color]
    @front_shock = args[:front_shock]
    @rear_shock = args[:rear_shock]
  end

  def spares
    if style == :road
      { chain:     '10-speed',
        tire_size: '23',
        tap_color: tap_color}
    else
      { chain:     '10-speed',
        tire_size: '2.1',
        rear_shock: rear_shock}
    end
  end

end

bike = Bicycle.new(
        style:       :mountain,
        size:        'M',
        front_shock: 'Monitou',
        rear_shock:  'Fox')

p bike.size
p bike.spares