import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../index"
import { Pagination } from "react-bootstrap"

const Pages = observer(() => {
  const { device } = useContext(Context)

  //Разделить общее кол-во товаров
  //На кол-во товаров на одной странице
  //Ceil округлит в большую сторону
  const pageCount = Math.ceil(device.totalCount / device.limit)
  const pages = []

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination className="mt-5">
      {pages.map(page => (
        <Pagination.Item
          active={device.page === page}
          activeLabel={''}
          onClick={() => device.setPage(page)}
          key={page}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
})

export default Pages
