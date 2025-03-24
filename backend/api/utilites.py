from groups.models import Group, GroupMembership


def get_user_groups(user):
    memberships = GroupMembership.objects.filter(member=user)
    groups = Group.objects.filter(group__in=memberships)
    return groups
