import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IUserAttributes extends Omit<IUser, 'id'> {}

@Table({ tableName: 'users' })
export class User extends Model<IUser, IUserAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;
}
