require 'minitest'
class WheelTest < MiniTest::Test
  
  def test_calculates_diamater
    wheel = Wheel.new(26, 1.5)

    assert_in_delta(29, wheel.diameter, 0.01)
  end
end

class DiameterDouble
  def diameter
    10
  end
end

class GearTest < MiniTest::Test
  def setup
    @observer = MiniTest::Mock.new
    @gear = Gear.new(
              chainring: 52,
              cog: 11,
              observer: @observer)
  end

  def test_notifies_observers_when_cog_change
    @observer.expect(:changed, true, [52, 27])
    @gear.set_cog(27)
    @observer.verify
  end

  def test_notifies_observers_when_chainring_change
    @observer.expect(:changed, true, [42, 11])
    @gear.set_cog(42)
    @observer.verify
  end 

  def test_calculates_gear_inches
    gear = Gear.new(
      chainring: 52,
      cog: 11,
      wheel: DiameterDouble.new)

    assert_in_delta(137.1, gear.gear_inches, 0.01)
  end
end