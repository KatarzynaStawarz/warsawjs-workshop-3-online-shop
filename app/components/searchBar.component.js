const template = `
<form name="searchForm" ng-submit="$ctrl.submitSearch()">
  <input type="text" ng-model="$ctrl.searchTerm">
  <button>Search</button>
  <button ng-click="$ctrl.clearSearch()">Clear</button>
</form>`

class SearchBarController {
  submitSearch() {
    this.search({term: this.searchTerm})
  }

  clearSearch() {
    this.searchTerm = ''
    this.submitSearch()
  }
}

export const name = 'searchBar'
export const properties = {
  template,
  controller: SearchBarController,
  bindings: {
    search: '&onSearch'
  }
}
