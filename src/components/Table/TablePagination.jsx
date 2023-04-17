import ReactPaginate from "react-paginate";

import { Flex } from "@chakra-ui/layout";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const TablePagination = ({ handlePageClick, pageCount }) => {
  return (
    <Flex
      as={ReactPaginate}
      w={200}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={50}
      pb={30}
      color={"#24CCA7"}
      breakLabel="..."
      nextLabel={<ArrowRightIcon />}
      activeClassName={"activePagination "}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={<ArrowLeftIcon />}
      renderOnZeroPageCount={null}
      disableInitialCallback={true}
    />
  );
};
