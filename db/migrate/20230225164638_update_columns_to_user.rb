class UpdateColumnsToUser < ActiveRecord::Migration[7.0]
  def change
    remove_index :users, :username
    remove_column :users, :username

    add_column :users, :email, :string, null: false
    add_index :users, :email, unique: true

    add_column :users, :confirmation_token, :string
    add_column :users, :confirmed_at, :datetime
    add_column :users, :confirmation_sent_at, :datetime
    add_column :users, :unconfirmed_email, :string
  end
end
