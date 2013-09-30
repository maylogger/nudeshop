# Require any additional compass plugins here.
require 'slim'
Slim::Engine.set_default_options :pretty => true, :disable_escape => true, :format => :html5

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compact

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :scss


the_hold_options = {
  :login => "evenwu", # 你的帳號
  :token => "229f2b40d4f17f98f142318250a75f20", # 你的密碼
  :project => "nudeshop", # 專案名稱, 會變成 http://your-project-name.evenwu.the-hold.handlino.com/
  # :project_site_password => "nudedesign", # 密碼，這一行拿掉的話就沒有密碼
  :host => "http://the-hold.handlino.com/",
  :cname => "nudeshop.evendesign.tw"
}
