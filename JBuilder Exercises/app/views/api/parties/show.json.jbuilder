json.extract! @party, :name

json.guests do
  json.partial! '/api/guests/guests', guests: @party.guests
end