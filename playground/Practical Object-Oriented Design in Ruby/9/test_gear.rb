require 'minitest'
class WheelTest < MiniTest::Test
  
  def test_calculates_diamater
    wheel = Wheel.new(26, 1.5)

    assert_in_delta(29, wheel.diameter, 0.01)
  end
end

class GearTest < MiniTest::Test
  def test_calculates_gear_inches
    gear = Gear.new(
      chainring: 52,
      cog: 11,
      wheel: Wheel.new(26, 1.5)
      
    assert_in_delta(137.1,
                    gear.gear_inches,
                    0.01)
  end
end