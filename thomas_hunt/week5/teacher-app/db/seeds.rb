

Teacher.destroy_all

puts "Creating teachers"

a1 = Teacher.create name: 'Tom', dob: "12/12/1993", nationality: 'Aus'
a2 = Teacher.create name: 'Linna', dob: "12/11/1990", nationality: 'Something'
a3 = Teacher.create name: 'Luke', dob: "12/12/1969", nationality: 'Other'



#Languages
Language.destroy_all
puts "Creating Languages"

Language.create name: 'Ruby',  difficulty:'Easy',  teacher_id: a1.id
Language.create name: 'Javascript', difficulty:'Hard', teacher: a2
Language.create name: 'HTML', difficulty:'Easy' teacher: a3
