package br.com.am.jardineiro.table;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class TableFunctions {
    public static <T> JardineiroTable<T> toJardineiroTable(List<T> list){
        JardineiroTable<T> table = new JardineiroTable<T>();
        List<ColumnTable> header = new ArrayList<ColumnTable>();
        for(T item : list){
            for(Field field : item.getClass().getDeclaredFields())
                if (field.isAnnotationPresent(Coluna.class)) {
                    Coluna annotation = field.getAnnotation(Coluna.class);
                    header.add(new ColumnTable(
                            field.getName(),
                            annotation.name(),
                            annotation.sortable()
                            ));
                }
            break;
        }
        table.setListHeader(header);
        table.setListData(list);
        return table;
    }
}
