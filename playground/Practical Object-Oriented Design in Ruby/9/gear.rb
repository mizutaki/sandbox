class Gear
  attr_reader :chainring, :cog, :rim, :tire

  def initialize(arg)
    @chainring = arg[:chainring]
    @cog = arg[:cog]
    @rim = arg[:rim]
    @tire = arg[:tire]
  end

  def gear_inches
    ratio * wheel.diameter
  end

  def wheel
    @wheel ||= Wheel.new(rim, tire)
  end 

  def ratio
    chainring / cog.to_f
  end
end

class Wheel
  attr_reader :rim, :tire
  def initialize(rim, tire)
    @rim = rim
    @tire = tire
  end

  def diameter
    rim + (tire * 2)
  end
end