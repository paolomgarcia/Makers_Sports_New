
o1 = Organization.create(sport: 'Baseball', league: 'MLB', team: 'team')

u1 = User.create(name:'paberto', email: 'paberto@makers.com', password:'1234' )

puts "done with agents...."

Player.create(p_name: 'Jose', p_birthday:"11/08/1993", p_nationality: "Venezuela", height: 172, weight: 235, position: "CF", user_id: u1.id, organization_id: o1.id)

puts "done with players..."