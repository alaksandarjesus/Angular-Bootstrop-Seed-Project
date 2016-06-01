var temporaryStorageService = function() {
  var temp = {};
  temporaryStorage = {};

  //TODO: persist to be coded later
  temporaryStorage.set = function(key, value,persist){
    temp[key] = value;
  }
  temporaryStorage.get = function(key, value,persist){
    if(!temp[key]){
        return false;
    }
    return temp[key];
  }
  return temporaryStorage;

}
temporaryStorageService.$inject = [];
app.service('temporaryStorageService', temporaryStorageService);
