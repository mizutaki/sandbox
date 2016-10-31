class Bicycle
  attr_reader :size, :parts

  def initialize(args={})
    @size = args[:size]
    @parts = args[:parts]
  end

  def spares
    parts.spares
  end
end

class Parts
  attr_reader :parts
  attr_reader :chain, :tire_size

  def initialize(parts)
    @parts = parts
  end

  def spares
    parts.select { |part| part.needs_spare }
  end
end

class Part
  attr_reader :name, :description, :needs_spare

  def initialize(args)
    @name = args[:name]
    @description = args[:description]
    @needs_spare = args.fetch(:needs_spare, true)
  end
end

chain = Part.new(name: 'chain', description: '10-speed')
road_tire = Part.new(name: 'tire_size', description: '23')
tape = Part.new(name: 'tape_color', description: 'red')
mountain_tire = Part.new(name: 'tire_size', description: '2.1')
rear_shock = Part.new(name: 'read_shock', description: 'FOX')
front_shock = Part.new(
  name: 'front_shock',
  description: 'Manitou',
  needs_spare: false)

road_bike = Bicycle.new(
  size:'L',
  parts: Parts.new([chain, road_tire, tape]))
p road_bike.size
p road_bike.spares

mountain_bike = Bicycle.new(
  size: 'L',
  parts: Parts.new([chain, mountain_tire, front_shock, rear_shock]))
p mountain_bike.size
p mountain_bike.spares

require 'ostruct'
module PartsFactory
  def self.build(config,
                 parts_class = Parts)
    parts_class.new(
      config.collect {|part_config|
        create_part(part_config)})
  end
  
  def self.create_part(part_config)
    OpenStruct.new(
      name: part_config[0],
      description: part_config[1],
      needs_spare: part_config.fetch(2, true))
  end
end

road_config =
[['chain', '10-speed'],
 ['tire_size', '23'],
 ['tape_color', 'red']]

mountain_config =
[['chain', '10-speed'],
 ['tire_size', '2.1'],
 ['front_shock', 'Manitou', false],
 ['rear_shock', 'FOX']]

p road_parts = PartsFactory.build(road_config)
p mountain_parts = PartsFactory.build(mountain_config)