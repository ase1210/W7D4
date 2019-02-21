json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
  json.image_url1 asset_path(@poke.image_url)
  json.item_ids @poke.items.map { |item| item.id }
end 

json.items do
  @poke.items.map do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
      json.image_url1 asset_path(item.image_url)
    end
  end
end