import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from 'src/user/model/user.model';

interface IRefreshToken {
  token: string;
  userId: number;
}

@Table({ tableName: 'refreshTokens' })
export class RefreshToken extends Model<IRefreshToken> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  token: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
