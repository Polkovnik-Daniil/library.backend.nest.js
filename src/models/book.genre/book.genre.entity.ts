import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('book_genre')
export class BookGenre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'book_id', type: 'uuid', length: 36 })
  bookId: string;

  @Column({ name: 'genre_id', type: 'uuid', length: 36 })
  genreId: string;

  @Column({
    name: 'creation_date',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationDate: Date;

  @Column({ name: 'edit_date', type: 'timestamp', nullable: true })
  editDate: Date | null;
}
