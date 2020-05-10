require 'rails_helper'
require 'json'
require './app/services/exchange_service'

describe 'Exchange' do
  let(:source_currency) { "USD" }
  let(:target_currency) { "BRL" }
  let(:exchange_value) { 5.3045 }
  let(:api_return) do 
    { 
        currency: [
            currency: "#{source_currency}/#{target_currency}",
            value: exchange_value,
            date: Time.now,
            type: 'Original'
        ]
     }
    end

    before do
        allow(RestClient).to receive(:get) { OpenStruct.new(body: api_return.json)}
    end
  
  it 'call' do
      amount = rand(0..9999)
      service_exchange = ExchangeService.new('USD', 'BRL').call
      expect_exchange = amount * exchange_value
      expect(service_exchange).to eq(expect_exchange)
  end
end