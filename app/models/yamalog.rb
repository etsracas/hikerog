class Yamalog < ApplicationRecord
  mount_uploader :yamalog_pic, YamalogPicUploader
  belongs_to :user

  validates :hiking_date, presence: true
  validates :mountain_name, presence: true
  validates :weather, length: { maximum: 20}
  validates :member, length: { maximum: 50}
  validates :route, length: { maximum: 2000}

  def created_by?(user)
    return false unless user
    user_id = user.id
  end
end
