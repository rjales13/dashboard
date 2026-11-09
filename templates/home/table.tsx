import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { iTableList } from "@/models/tableList";

interface iTableListProps {
  data: iTableList[];
}

export const TableList = ({ data }: iTableListProps) => {
  return (
    <div className="w-full min-w-0 overflow-x-auto rounded-xl bg-card p-4 ring-1 ring-foreground/10">
      <Table className="min-w-[36rem] text-xs">
        <TableCaption className="text-left text-xs">
          This is just a random list.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="h-8 px-2">User</TableHead>
            <TableHead className="h-8 px-2">Id</TableHead>
            <TableHead className="h-8 px-2">Title</TableHead>
            <TableHead className="h-8 px-2">Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ body, id, title, userId }) => (
            <TableRow key={id}>
              <TableCell className="px-2 py-1 font-medium">{userId}</TableCell>
              <TableCell className="px-2 py-1">{id}</TableCell>
              <TableCell className="w-full px-2 py-1">
                <div className="truncate">{title}</div>
              </TableCell>
              <TableCell className="w-full px-2 py-1">
                <div className="truncate">{body}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="px-2 py-1">
              Total
            </TableCell>
            <TableCell className="px-2 py-1 text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
