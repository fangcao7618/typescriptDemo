//文件的拷贝
import * as shelljs from "shelljs";

shelljs.cp("-R", "public", "dist");
shelljs.cp("-R", "views", "dist");
