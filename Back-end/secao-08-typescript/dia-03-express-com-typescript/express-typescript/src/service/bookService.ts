import connection from '../model/connection';
import BookModel from '../model/book.model';
import IBook from '../interfaces/book';
import { BadRequestError, NotFoundError } from 'restify-errors';

const properties = ['title', 'price', 'author', 'isbn'];

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  static validateProperties(book: IBook): [boolean, string | null] {
    for (let i = 0; i < properties.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
        return [false, properties[i]];
      }
    }
    return [true, null];
  }

  static validateValues(book: IBook): [boolean, string | null] {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
      const [property, value] = entries[i];
      if (!value) {
        return [false, property];
      }
    }
    return [true, null];
  }

  static validationBook(book: IBook): void | string {
    let [valid, property] = BookService.validateProperties(book);
  
    if (!valid){
      return `O campo ${property} é obrigatório.`;
    }
    [valid, property] = BookService.validateValues(book);
  
    if (!valid) {
      return `O campo ${property} não pode ser nulo ou vazio.`;
    }
  }

  public async getAll(): Promise<IBook[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<IBook> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book: IBook): Promise<IBook> {
    const isValidBook = BookService.validationBook(book);

    if (typeof isValidBook === 'string') {
      // aqui estamos jogando o erro para o nosso middleware de erro fazer o tratamento e dar a resposta da requisição
      throw new BadRequestError(isValidBook);
    }

    return this.model.create(book);
  }

  public async update(id: number, book: IBook): Promise<void> {
    // vamos utilizar a mesma validação do método create
    const isValidBook = BookService.validationBook(book);
    if (typeof isValidBook === 'string') {
      throw new BadRequestError(isValidBook);
    }

    const bookFound = await this.model.getById(id);

    if (!bookFound) {
      throw new NotFoundError('Book not found!');
    }

    return this.model.update(id, book);
  }

  public async remove(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('Book not found!');
    }

    this.model.remove(id);
  }
}

export default BookService;