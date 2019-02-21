class Api::PokemonController < ApplicationController


  def index
    @pokemon = Pokemon.all
  end

  def show
    @poke = Pokemon.find_by(id: params[:id])
  end

  # def create
    
  # end

  # private
  # will moves work?
  # def poke_params
  #   params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  # end
end





