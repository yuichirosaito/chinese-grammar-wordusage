class Post < ApplicationRecord
  validates :content, presence: true, length: { maximum: 60 }
  has_many :likes
  def self.search(search)
    if search != ''
      Post.where('content LIKE(?)', "%#{search}%")
    else
      Post.all
    end
  end
end
