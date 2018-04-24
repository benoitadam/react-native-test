'use strict';

import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    name: 'Puzzle Game',
    continue: 'Continue',
    restart: 'Restart',
    newGame: 'New Game',
    weekRank: 'Week Rank',
    noRecord: 'No records yet',
    onlineRank: 'Online Rank',
    rank: 'You are at %{rank}',

    ok: 'Got it',
    congrats: 'Congrats',
    noSolve: 'No solve after this move',
    success: 'You solve this game in\n',
    fail: 'You lose this game for more then 3 wrong moves',
    errorMove: 'Wrong move for %{error} times, you will lose for more than 3 times',
    newRecord: 'New record! You solve this game in\n',

    uploadRecord: 'Send you record to the server?',
    uploadMessage: 'You have to upload your record to view the online rank',
    reject: 'Reject',
    grant: 'Grant',
    loading: 'loading...',
    error: 'Error',
    uploadError: 'Upload failed',
    queryError: 'Query failed',

    share: 'Share',
    shareMessage: 'Puzzle Game - for pure puzzle pleasure',
    shareFailed: 'Share faild',

    rate: 'Rate this app',
    rateMessage: 'I developed this app for fun, your rate is my great hornor',
    cancel: 'Cancel',
    confirm: 'Confrim',
  },
};

export default I18n;