# Warmup - Raindrops
# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples
# 28 has 7 as a factor.
# In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors.
# In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor.
# Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# You will need to create a raindrops.rb file that can be executable in your terminal.
require 'colorize'

def raindrops ( number )
  response = ''
  response += 'Pling'.magenta    if number%3 == 0
  response += 'Plang'.blue       if number%5 == 0
  response += 'Plong'.light_blue if number%7 == 0
  response += number.to_s.black  if response.empty?
  response
end

print "Give me a number: "
input = gets.to_i
i = 0
for i in 1..input
  puts raindrops(i)
end
