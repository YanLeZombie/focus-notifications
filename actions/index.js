'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addNotification = addNotification;
exports.addNotifications = addNotifications;
exports.readNotification = readNotification;
exports.readNotificationGroup = readNotificationGroup;
exports.setVisibilityFilter = setVisibilityFilter;
exports.openCenter = openCenter;
exports.closeCenter = closeCenter;
/*
* action types
*/

var ADD_NOTIFICATION = exports.ADD_NOTIFICATION = 'ADD_NOTIFICATION';
var ADD_NOTIFICATIONS = exports.ADD_NOTIFICATIONS = 'ADD_NOTIFICATIONS';
var READ_NOTIFICATION = exports.READ_NOTIFICATION = 'READ_NOTIFICATION';
var READ_NOTIFICATION_GROUP = exports.READ_NOTIFICATION_GROUP = 'READ_NOTIFICATION_GROUP';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var OPEN_CENTER = exports.OPEN_CENTER = 'OPEN_CENTER';
var CLOSE_CENTER = exports.CLOSE_CENTER = 'CLOSE_CENTER';

/*
* other constants
*/

var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
* action creators
*/

function addNotification(notif) {
    return { type: ADD_NOTIFICATION, payload: notif };
}

function addNotifications(notifs) {
    return { type: ADD_NOTIFICATIONS, payload: notifs };
}

function readNotification(notificationId) {
    console.log(readNotification, notificationId);
    return { type: READ_NOTIFICATION, payload: notificationId };
}

function readNotificationGroup(notificationIds) {
    console.log(readNotificationGroup, notificationIds);
    return { type: READ_NOTIFICATION_GROUP, payload: notificationIds };
}

function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter: filter };
}

//Actions creators related to the opening state.

function openCenter() {
    return { type: OPEN_CENTER };
}
function closeCenter() {
    return { type: CLOSE_CENTER };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3J0ZW4uanMiXSwibmFtZXMiOlsiYWRkTm90aWZpY2F0aW9uIiwiYWRkTm90aWZpY2F0aW9ucyIsInJlYWROb3RpZmljYXRpb24iLCJyZWFkTm90aWZpY2F0aW9uR3JvdXAiLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwib3BlbkNlbnRlciIsImNsb3NlQ2VudGVyIiwiQUREX05PVElGSUNBVElPTiIsIkFERF9OT1RJRklDQVRJT05TIiwiUkVBRF9OT1RJRklDQVRJT04iLCJSRUFEX05PVElGSUNBVElPTl9HUk9VUCIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsIk9QRU5fQ0VOVEVSIiwiQ0xPU0VfQ0VOVEVSIiwiVmlzaWJpbGl0eUZpbHRlcnMiLCJTSE9XX0FMTCIsIlNIT1dfQ09NUExFVEVEIiwiU0hPV19BQ1RJVkUiLCJub3RpZiIsInR5cGUiLCJwYXlsb2FkIiwibm90aWZzIiwibm90aWZpY2F0aW9uSWQiLCJjb25zb2xlIiwibG9nIiwibm90aWZpY2F0aW9uSWRzIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7OztRQTBCZ0JBLGUsR0FBQUEsZTtRQUlBQyxnQixHQUFBQSxnQjtRQUlBQyxnQixHQUFBQSxnQjtRQUtBQyxxQixHQUFBQSxxQjtRQUtBQyxtQixHQUFBQSxtQjtRQU1BQyxVLEdBQUFBLFU7UUFHQUMsVyxHQUFBQSxXO0FBckRoQjs7OztBQUlPLElBQU1DLDhDQUFtQixrQkFBekI7QUFDQSxJQUFNQyxnREFBb0IsbUJBQTFCO0FBQ0EsSUFBTUMsZ0RBQW9CLG1CQUExQjtBQUNBLElBQU1DLDREQUEwQix5QkFBaEM7QUFDQSxJQUFNQyx3REFBd0IsdUJBQTlCO0FBQ0EsSUFBTUMsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyxzQ0FBZSxjQUFyQjs7QUFFUDs7OztBQUlPLElBQU1DLGdEQUFvQjtBQUM3QkMsY0FBVSxVQURtQjtBQUU3QkMsb0JBQWdCLGdCQUZhO0FBRzdCQyxpQkFBYTtBQUhnQixDQUExQjs7QUFNUDs7OztBQUlPLFNBQVNqQixlQUFULENBQXlCa0IsS0FBekIsRUFBZ0M7QUFDbkMsV0FBTyxFQUFFQyxNQUFNWixnQkFBUixFQUEwQmEsU0FBU0YsS0FBbkMsRUFBUDtBQUNIOztBQUVNLFNBQVNqQixnQkFBVCxDQUEwQm9CLE1BQTFCLEVBQWtDO0FBQ3JDLFdBQU8sRUFBRUYsTUFBTVgsaUJBQVIsRUFBMkJZLFNBQVNDLE1BQXBDLEVBQVA7QUFDSDs7QUFFTSxTQUFTbkIsZ0JBQVQsQ0FBMEJvQixjQUExQixFQUEwQztBQUM3Q0MsWUFBUUMsR0FBUixDQUFZdEIsZ0JBQVosRUFBOEJvQixjQUE5QjtBQUNBLFdBQU8sRUFBRUgsTUFBTVYsaUJBQVIsRUFBMkJXLFNBQVNFLGNBQXBDLEVBQVA7QUFDSDs7QUFFTSxTQUFTbkIscUJBQVQsQ0FBK0JzQixlQUEvQixFQUFnRDtBQUNuREYsWUFBUUMsR0FBUixDQUFZckIscUJBQVosRUFBbUNzQixlQUFuQztBQUNBLFdBQU8sRUFBRU4sTUFBTVQsdUJBQVIsRUFBaUNVLFNBQVNLLGVBQTFDLEVBQVA7QUFDSDs7QUFFTSxTQUFTckIsbUJBQVQsQ0FBNkJzQixNQUE3QixFQUFxQztBQUN4QyxXQUFPLEVBQUVQLE1BQU1SLHFCQUFSLEVBQStCZSxjQUEvQixFQUFQO0FBQ0g7O0FBRUQ7O0FBRU8sU0FBU3JCLFVBQVQsR0FBc0I7QUFDekIsV0FBTyxFQUFDYyxNQUFNUCxXQUFQLEVBQVA7QUFDSDtBQUNNLFNBQVNOLFdBQVQsR0FBdUI7QUFDMUIsV0FBTyxFQUFDYSxNQUFNTixZQUFQLEVBQVA7QUFDSCIsImZpbGUiOiJzaG9ydGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBhY3Rpb24gdHlwZXNcclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfTk9USUZJQ0FUSU9OID0gJ0FERF9OT1RJRklDQVRJT04nO1xyXG5leHBvcnQgY29uc3QgQUREX05PVElGSUNBVElPTlMgPSAnQUREX05PVElGSUNBVElPTlMnO1xyXG5leHBvcnQgY29uc3QgUkVBRF9OT1RJRklDQVRJT04gPSAnUkVBRF9OT1RJRklDQVRJT04nO1xyXG5leHBvcnQgY29uc3QgUkVBRF9OT1RJRklDQVRJT05fR1JPVVAgPSAnUkVBRF9OT1RJRklDQVRJT05fR1JPVVAnO1xyXG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic7XHJcbmV4cG9ydCBjb25zdCBPUEVOX0NFTlRFUiA9ICdPUEVOX0NFTlRFUic7XHJcbmV4cG9ydCBjb25zdCBDTE9TRV9DRU5URVIgPSAnQ0xPU0VfQ0VOVEVSJztcclxuXHJcbi8qXHJcbiogb3RoZXIgY29uc3RhbnRzXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgVmlzaWJpbGl0eUZpbHRlcnMgPSB7XHJcbiAgICBTSE9XX0FMTDogJ1NIT1dfQUxMJyxcclxuICAgIFNIT1dfQ09NUExFVEVEOiAnU0hPV19DT01QTEVURUQnLFxyXG4gICAgU0hPV19BQ1RJVkU6ICdTSE9XX0FDVElWRSdcclxufTtcclxuXHJcbi8qXHJcbiogYWN0aW9uIGNyZWF0b3JzXHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTm90aWZpY2F0aW9uKG5vdGlmKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBBRERfTk9USUZJQ0FUSU9OLCBwYXlsb2FkOiBub3RpZiB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTm90aWZpY2F0aW9ucyhub3RpZnMpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IEFERF9OT1RJRklDQVRJT05TLCBwYXlsb2FkOiBub3RpZnMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uSWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlYWROb3RpZmljYXRpb24sIG5vdGlmaWNhdGlvbklkKTtcclxuICAgIHJldHVybiB7IHR5cGU6IFJFQURfTk9USUZJQ0FUSU9OLCBwYXlsb2FkOiBub3RpZmljYXRpb25JZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZE5vdGlmaWNhdGlvbkdyb3VwKG5vdGlmaWNhdGlvbklkcykge1xyXG4gICAgY29uc29sZS5sb2cocmVhZE5vdGlmaWNhdGlvbkdyb3VwLCBub3RpZmljYXRpb25JZHMpO1xyXG4gICAgcmV0dXJuIHsgdHlwZTogUkVBRF9OT1RJRklDQVRJT05fR1JPVVAsIHBheWxvYWQ6IG5vdGlmaWNhdGlvbklkcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eUZpbHRlcihmaWx0ZXIpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiwgZmlsdGVyIH07XHJcbn1cclxuXHJcbi8vQWN0aW9ucyBjcmVhdG9ycyByZWxhdGVkIHRvIHRoZSBvcGVuaW5nIHN0YXRlLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5DZW50ZXIoKSB7XHJcbiAgICByZXR1cm4ge3R5cGU6IE9QRU5fQ0VOVEVSfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VDZW50ZXIoKSB7XHJcbiAgICByZXR1cm4ge3R5cGU6IENMT1NFX0NFTlRFUn07XHJcbn1cclxuIl19