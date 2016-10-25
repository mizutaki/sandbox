class Bicycle
  attr_reader :size

  def initialize(args={})
    @size = args[:size]
  end
end

class RoadBike < Bicycle
  attr_reader :tap_color

  def initialize(args)
    @tap_color = args[:tap_color]
    super(args)
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

class MountainBike < Bicycle
  attr_reader :front_shock, :rear_shock

  def initialize(args)
    @front_shock = args[:front_shock]
    @rear_shock = args[:rear_shock]
    super(args)
  end

  def spares
    super.merge(rear_shock: rear_shock)
  end
end

road_bike = RoadBike.new(
        size:        'M',
        type_color: 'red')

p road_bike.size

mountain_bike = MountainBike.new(
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox')

p mountain_bike.size