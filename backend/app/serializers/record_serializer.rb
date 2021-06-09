class RecordSerializer < ActiveModel::Serializer
  attributes :id, :date, :num, :unit, :tracker_id
  #belongs_to :tracker
end
