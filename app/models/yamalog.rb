class Yamalog < ApplicationRecord
  belongs_to :user
  
  validates :hiking_date, presence: true
  validates :mountain_name, presence: true
  validates :weather, length: { maximum: 20}
  validates :member, length: { maximum: 50}
  validates :route, length: { maximum: 2000}
end
