class RecordSerializer < ActiveModel::Serializer
  attributes :id, :date, :content, :tracker_id
  #belongs_to :tracker
end
