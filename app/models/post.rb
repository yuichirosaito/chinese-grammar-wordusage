class Post < ApplicationRecord

    validates :content, presence: true
    
    def self.search(search)
        if search != ""
          Post.where('content LIKE(?)', "%#{search}%")
        else
          Post.all
        end
      end

end
