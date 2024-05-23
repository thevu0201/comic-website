import "./paginate.scss";
import { useSelector } from "react-redux";
import { PageNumber } from "../index";
import icons from "../../utils/icons";
import { useEffect, useState } from "react";

const { GrLinkNext, GrLinkPrevious   } = icons;
// const arrNumber = [1, 2, 3];

const PaginateComponent = ({ page }) => {
  const { count, stories } = useSelector((state) => state.story);
  const [arrPage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(+page || 1);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);

  console.log("count", count);
  console.log("stories", stories);

  useEffect(() => {
    
    let maxPage = Math.floor( count / stories.length);
    console.log("maxpage =>", maxPage);
    let end = currentPage + 2 > maxPage ? maxPage : currentPage + 2;
    console.log("end =>", end);
    let start = currentPage - 2 <= 0 ? 1 : currentPage - 2;
    console.log("start =>", start);
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false);
    currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false);

  }, [count, stories, currentPage]);
  console.log("arr page", arrPage);

  // const handlePageNumber = () => {
  //   let max = Math.floor(count / stories.length);
  //   let arrNumber = [];
  //   for (let i = 1; i <= max; i++) {
  //     arrNumber.push(i);
  //   }
  //   return arrNumber.length > 4 ? arrNumber.filter(i => i < 6) : arrNumber;
  // };

  return (
    <div className="page_redirect">
      {!isHideStart && <PageNumber icon={<GrLinkPrevious />} setCurrentPage={setCurrentPage} text={1} />}
      {!isHideStart && <PageNumber text={'...'} />}
        {arrPage.length > 0 &&
          arrPage.map((item) => {
            return <PageNumber key={item} text={item} setCurrentPage ={setCurrentPage} currentPage ={currentPage}/>;
        })}
      {!isHideEnd && <PageNumber text={'...'} />}
      {!isHideEnd && <PageNumber icon={<GrLinkNext />} setCurrentPage={setCurrentPage} text={Math.floor(count / stories.length)} />}
    </div>
  );
};

export default PaginateComponent;
