$(() => {
  // Add tooltip functionality
  $('.icon').tooltip();

  // Clicking on issue row takes user to show page
  $('.issue-row').click((event) => {
    const $row = $(event.currentTarget);
    const issueId = $row.children('.id').text();
    window.location.href += `/issues/${issueId}`;
  });

  // Clicking on board row takes user to issues index page
  $('.board-row').click((event) => {
    const $row = $(event.currentTarget);
    const boardKey = $row.children('.key').text();
    window.location.href += `/_${boardKey}`;
  });

  $('.trash-icon').click((event) => {
    const $icon = $(event.currentTarget);
    $icon.parent().children('form').submit();
  });
});
