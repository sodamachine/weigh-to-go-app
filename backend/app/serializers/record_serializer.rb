class RecordSerializer < ActiveModel::Serializer
  attributes :id, :weight, :day_id
  #belongs_to :day
end
