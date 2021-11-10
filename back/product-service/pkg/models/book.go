package models

import (
	"github.com/realfranser/fullstack-toolbox/back/product-service/pkg/config"
	"gorm.io/gorm"
)

var bookDB *gorm.DB

type Book struct {
	ID     	uint		`gorm:"primaryKey"`
	Title 	string 	`json:"title"`
	Author 	string 	`json:"author"`
	Stock 	uint16	`json:"stock"`
}

func init() {
	config.Connect()
	bookDB = config.GetDB()
	bookDB.AutoMigrate(&Book{})
}

func (b *Book) CreateBook() *Book {
	bookDB.Create(&b)
	return b
}

func GetAllBooks() []Book {
	var Books []Book
	bookDB.Find(&Books)
	return Books
}

func GetBookById(Id int64) (*Book, *gorm.DB) {
	var getBook Book
	bookDB := bookDB.Where("ID=?", Id).Find(&getBook)
	return &getBook, bookDB
}

func DeleteBook(ID int64) Book {
	var book Book
	bookDB.Where("ID=?", ID).Delete(&book)
	return book
}
