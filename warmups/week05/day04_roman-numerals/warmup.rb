class Roman

  def initialize
    @roman_map = {
      1000 => "M",

    }
  end

  def to_roman
  end
end



test = Roman.new

puts test.to_roman 1990










class Roman

  def initialize
    @romans = {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
  end

  def to_roman(number)
    result = ""

    @romans.each do |key, value|
      # puts "each: #{key} => #{value}, number:#{number}."

      while number >=key
        result += value

        puts "While #{number} >= #{key}, we add #{value} to result. New result is #{result}."

        number -= key
      end
    end #loop

    result
  end
end

test = Roman.new
p test.to_roman(1990)
p test.to_roman(2008)
