self.addEventListener("install", function (event) {
  event.waitUntil(preLoad());
});

// var filesToCache = ["/", "/menu", "/contactUs", "/offline.html"];
var filesToCache = ["/"];

var preLoad = function () {
  return caches.open("offline").then(function (cache) {
    // caching index and important routes
    return cache.addAll(filesToCache);
  });
};

self.addEventListener("fetch", function (event) {
  event.respondWith(
    checkResponse(event.request).catch(function () {
      return returnFromCache(event.request);
    })
  );
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function (request) {
  return new Promise(function (fulfill, reject) {
    fetch(request).then(function (response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function (request) {
  return caches.open("offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};

self.addEventListener("sync", (e) => {
  if (e.tag == "helloSync") {
    console.log("helloSync [sw.js]");
  }
});

self.addEventListener("push", (e) => {
  if (e && e.data) {
    const data = e.data.json();
    if (data.method === "pushMessage") {
      e.waitUntil(
        self.registration.showNotification("Test App", {
          body: data.message,
        })
      );
    }
  }
});
