class Bicycle
  attr_reader :size, :tap_color

  def initialize(args)
    @size = args[:size]
    @size = args[:tap_color]
  end

  def spares
    { chain:     '10-speed',
      tire_size: '23',
      tap_color: tap_color}
  end

end

bike = Bicycle.new(
        size:      'M',
        tap_color: 'red')

p bike.size
p bike.spares