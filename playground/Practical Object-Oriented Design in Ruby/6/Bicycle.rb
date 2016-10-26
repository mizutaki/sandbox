class Bicycle
  attr_reader :size, :chain, :tire_size

  def initialize(args={})
    @size = args[:size]
    @chain = args[:chain] || default_chain
    @tire_size = args[:tire_size] || default_tire_size
  end

  def default_chain
    '10-speed'
  end

  def default_tire_size
    raise NotImplementedError, "This #{self.class} cannot respond to:"
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

  def default_tire_size
    '23'
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

  def default_tire_size
    '2.1'
  end
end

class RecumbentBike < Bicycle
  def default_chain
    '9-speed'
  end
end

road_bike = RoadBike.new(
        size:        'M',
        type_color: 'red')

p road_bike.size
p road_bike.tire_size
p road_bike.chain

mountain_bike = MountainBike.new(
  size: 'S',
  front_shock: 'Manitou',
  rear_shock: 'Fox')

p mountain_bike.size
p mountain_bike.tire_size
p mountain_bike.chain

bent = RecumbentBike.new