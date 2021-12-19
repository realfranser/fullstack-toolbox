package interfaces

type Pagination struct {
	PageSize	int	`json:"page_size"`
	PageIndex	int	`json:"page_index"`
	Offset		int	`json:"offset"`
}
