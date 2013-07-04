require 'rubygems'
require 'sinatra'
require 'json'

# Sinatra config details: http://www.sinatrarb.com/configuration.html

# The application’s root directory
set :root, File.dirname(__FILE__)

# Static files directory
set :public_folder, Proc.new { File.join(root, "app") }

# View template directory
set :views, Proc.new { File.join(root, "app") }

get '/' do
  File.read "#{Dir.pwd}/app/index.html"
end