# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140715132053) do

  create_table "client_seeks", force: true do |t|
    t.string   "name"
    t.string   "age"
    t.string   "gender"
    t.string   "mobile_number"
    t.string   "home_number"
    t.string   "email"
    t.string   "state"
    t.string   "service_area"
    t.string   "subjects"
    t.string   "levels"
    t.string   "availability"
    t.string   "requirements"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "heading"
    t.string   "tutor_name"
    t.string   "tutor_mobile_number"
    t.string   "tutor_email"
    t.string   "experience"
  end

  create_table "delayed_jobs", force: true do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority"

  create_table "supports", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "phone"
    t.string   "subject"
    t.string   "message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tutor_seeks", force: true do |t|
    t.string   "title"
    t.string   "name"
    t.string   "mobile_number"
    t.string   "home_number"
    t.string   "email"
    t.string   "reason"
    t.string   "state"
    t.string   "service_area"
    t.string   "subjects"
    t.string   "levels"
    t.string   "num_students"
    t.string   "requirements"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.datetime "exam_date"
  end

end
