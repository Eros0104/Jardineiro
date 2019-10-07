package br.com.am.jardineiro.table;

import java.util.List;

public class JardineiroTable<T> {
    private List<ColumnTable> listHeader;
    private List<T> listData;

    public JardineiroTable() {
    }

    public List<ColumnTable> getListHeader() {
        return listHeader;
    }

    public void setListHeader(List<ColumnTable> listHeader) {
        this.listHeader = listHeader;
    }

    public List<T> getListData() {
        return listData;
    }

    public void setListData(List<T> listData) {
        this.listData = listData;
    }
}
