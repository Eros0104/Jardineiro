package br.com.am.jardineiro.table;

import java.util.List;

public class JardineiroTable<T> {
    private List<Coluna> listHeader;
    private List<T> listData;

    public JardineiroTable(List<Coluna> listHeader) {
        this.listHeader = listHeader;
    }

    public List<Coluna> getListHeader() {
        return listHeader;
    }

    public void setListHeader(List<Coluna> listHeader) {
        this.listHeader = listHeader;
    }

    public List<T> getListData() {
        return listData;
    }

    public void setListData(List<T> listData) {
        this.listData = listData;
    }
}
