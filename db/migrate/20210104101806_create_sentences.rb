class CreateSentences < ActiveRecord::Migration[6.0]
  def change
    create_table :sentences do |t|
      t.string :sentence, null:false
      t.string :explaination, null:false
      t.string :tag, null:false
      t.timestamps
    end
  end
end