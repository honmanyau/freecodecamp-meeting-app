export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const FETCH_PROGRESS = 'FETCH_PROGRESS';
export const STORE_FETCHED = 'STORE_FETCHED';

export function fetchRestaurants(city) {
  return function(dispatch) {
    const url = `https://freecodecamp-api.glitch.me/api/yelp/${city}`;

    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log(`Error occured when attempting to fetch from ${url}.  Status code: ${response.status}`)
        }

        response.json()
          .then(data => {
            console.log(data);
          })
      })
      .catch(error => 'Error occured when attempting to fetch from ')
  }
}

export function fetchProgress(inProgress) {
  return {
    type: FETCH_PROGRESS,
    payload: {
      inProgress
    }
  }
}

export function storeFetched(data) {
  return {
    type: STORE_FETCHED,
    payload: {
      data
    }
  }
}
