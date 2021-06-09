class CalendarSerializer < ActiveModel::Serializer
  attributes :id, :date, :month, :day, :year, :weekday

  # def month
  #   Object.date.month
  # end

end
